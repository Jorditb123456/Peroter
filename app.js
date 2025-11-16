const storageKey = 'cosigo-erp-state';
const now = () => new Date().toISOString();

const defaultState = {
  warehouses: [
    { id: 'wh-cdmx', name: 'CDMX Central', capacity: 12000, temperature: 'Si', lastAudit: '2023-11-01' },
    { id: 'wh-gdl', name: 'Guadalajara Cross-Dock', capacity: 8500, temperature: 'No', lastAudit: '2023-10-24' },
    { id: 'wh-mty', name: 'Monterrey Frío', capacity: 6400, temperature: 'Si', lastAudit: '2023-10-10' }
  ],
  items: [
    {
      sku: 'FRS-984',
      name: 'Fresas congeladas 1kg',
      category: 'Perecederos',
      warehouse: 'wh-mty',
      stock: 540,
      reorder: 300,
      status: 'optimo',
      lastMovement: '2023-11-15T09:30:00Z'
    },
    {
      sku: 'BOT-221',
      name: 'Botella retornable 600ml',
      category: 'Empaques',
      warehouse: 'wh-gdl',
      stock: 120,
      reorder: 200,
      status: 'bajo',
      lastMovement: '2023-11-14T12:15:00Z'
    },
    {
      sku: 'RCK-500',
      name: 'Rack metálico pesado',
      category: 'Infraestructura',
      warehouse: 'wh-cdmx',
      stock: 48,
      reorder: 20,
      status: 'optimo',
      lastMovement: '2023-11-12T15:45:00Z'
    },
    {
      sku: 'INS-004',
      name: 'Insumo médico estéril',
      category: 'Salud',
      warehouse: 'wh-cdmx',
      stock: 40,
      reorder: 80,
      status: 'bloqueado',
      lastMovement: '2023-11-10T08:12:00Z'
    }
  ],
  movements: [
    { sku: 'FRS-984', type: 'entrada', quantity: 120, note: 'Resurtido semanal', at: '2023-11-15T09:30:00Z' },
    { sku: 'BOT-221', type: 'salida', quantity: 80, note: 'Transferencia a CDMX', at: '2023-11-14T12:15:00Z' },
    { sku: 'RCK-500', type: 'entrada', quantity: 12, note: 'Nuevos niveles', at: '2023-11-12T15:45:00Z' }
  ]
};

const safeStorage = {
  get() {
    try {
      const raw = localStorage.getItem(storageKey);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn('No se pudo leer localStorage', error);
      return null;
    }
  },
  set(value) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (error) {
      console.warn('No se pudo guardar localStorage', error);
    }
  }
};

let state = safeStorage.get() ?? defaultState;

const elements = {
  warehouseList: document.getElementById('warehouseList'),
  warehouseForm: document.getElementById('warehouseForm'),
  inventoryTable: document.getElementById('inventoryTable'),
  statusFilter: document.getElementById('statusFilter'),
  searchInput: document.getElementById('searchInput'),
  itemForm: document.getElementById('itemForm'),
  movementForm: document.getElementById('movementForm'),
  movementLog: document.getElementById('movementLog'),
  kpiWrapper: document.getElementById('kpiWrapper'),
  exportBtn: document.getElementById('exportBtn')
};

let quickFilter = 'all';

const formatNumber = (value) => value.toLocaleString('es-MX');

const findWarehouse = (id) => state.warehouses.find((wh) => wh.id === id);

function persist() {
  safeStorage.set(state);
}

function computeStatus(item) {
  if (item.status === 'bloqueado') return 'bloqueado';
  if (item.stock <= item.reorder) return 'bajo';
  return 'optimo';
}

function renderWarehouses() {
  elements.warehouseList.innerHTML = state.warehouses
    .map((wh) => {
      const occupancy = Math.min(100, Math.round((warehouseStock(wh.id) / wh.capacity) * 100));
      return `
        <li class="warehouse-card">
          <strong>${wh.name}</strong>
          <span>Capacidad: ${formatNumber(wh.capacity)} m² · Ocupación ${occupancy}%</span><br />
          <span>Última auditoría: ${wh.lastAudit}</span>
        </li>`;
    })
    .join('');

  const warehouseSelects = elements.itemForm.querySelector('select[name="warehouse" ]');
  warehouseSelects.innerHTML = state.warehouses
    .map((wh) => `<option value="${wh.id}">${wh.name}</option>`)
    .join('');

  const movementSelect = elements.movementForm.querySelector('select[name="sku"]');
  movementSelect.innerHTML = state.items
    .map((item) => `<option value="${item.sku}">${item.sku} · ${item.name}</option>`)
    .join('');
}

function warehouseStock(warehouseId) {
  return state.items
    .filter((item) => item.warehouse === warehouseId)
    .reduce((sum, item) => sum + item.stock, 0);
}

function renderInventory() {
  const term = elements.searchInput.value.toLowerCase();
  const status = elements.statusFilter.value;

  const filtered = state.items.filter((item) => {
    const matchesTerm = item.name.toLowerCase().includes(term) || item.sku.toLowerCase().includes(term);
    const matchesStatus = status === 'todos' || computeStatus(item) === status;

    const daysSinceMovement = (Date.now() - new Date(item.lastMovement).getTime()) / (1000 * 60 * 60 * 24);
    const matchesQuick =
      quickFilter === 'all' ||
      (quickFilter === 'low' && computeStatus(item) === 'bajo') ||
      (quickFilter === 'idle' && daysSinceMovement > 20);

    return matchesTerm && matchesStatus && matchesQuick;
  });

  elements.inventoryTable.innerHTML = filtered
    .map((item) => {
      const warehouse = findWarehouse(item.warehouse)?.name ?? 'N/D';
      const status = computeStatus(item);
      const badgeClass = status === 'optimo' ? 'success' : status === 'bajo' ? 'warning' : 'danger';
      const statusLabel = status === 'optimo' ? 'Óptimo' : status === 'bajo' ? 'Stock bajo' : 'Bloqueado';
      return `
        <tr>
          <td>${item.sku}</td>
          <td>${item.name}<br /><small>${item.category}</small></td>
          <td>${warehouse}</td>
          <td class="numeric">${formatNumber(item.stock)}</td>
          <td class="numeric">${formatNumber(item.reorder)}</td>
          <td><span class="badge ${badgeClass}">${statusLabel}</span></td>
          <td class="table-actions">
            <button data-action="adjust" data-sku="${item.sku}">Ajustar</button>
          </td>
        </tr>`;
    })
    .join('');
}

function renderKpis() {
  const totalStock = state.items.reduce((sum, item) => sum + item.stock, 0);
  const lowItems = state.items.filter((item) => computeStatus(item) === 'bajo').length;
  const blocked = state.items.filter((item) => item.status === 'bloqueado').length;
  const avgReorder = Math.round(
    state.items.reduce((sum, item) => sum + (item.stock / item.reorder || 0), 0) / state.items.length
  );

  const cards = [
    { label: 'Stock total', value: formatNumber(totalStock), description: 'unidades activas', badge: `${state.items.length} SKU` },
    { label: 'SKU en riesgo', value: lowItems, description: 'por debajo del punto de reorden', badge: 'Prioridad alta' },
    { label: 'Bloqueados', value: blocked, description: 'esperando liberación de calidad', badge: 'Inspección' },
    { label: 'Cobertura promedio', value: `${avgReorder} %`, description: 'stock / punto de reorden', badge: 'Objetivo 120%' }
  ];

  elements.kpiWrapper.innerHTML = cards
    .map(
      (card) => `
      <article class="kpi-card">
        <p class="eyebrow">${card.label}</p>
        <p class="kpi-value">${card.value}</p>
        <p>${card.description}</p>
        <span class="badge success">${card.badge}</span>
      </article>`
    )
    .join('');
}

function renderMovements() {
  const sorted = [...state.movements].sort((a, b) => new Date(b.at) - new Date(a.at)).slice(0, 6);
  elements.movementLog.innerHTML = sorted
    .map((movement) => {
      const item = state.items.find((it) => it.sku === movement.sku);
      const label = movement.type === 'entrada' ? 'Entrada' : 'Salida';
      const qty = `${movement.type === 'entrada' ? '+' : '-'}${movement.quantity}`;
      return `
        <li>
          <time>${new Date(movement.at).toLocaleString('es-MX')}</time>
          <strong>${label} ${qty} · ${movement.sku}</strong>
          <p>${item?.name ?? ''} ${movement.note ? '— ' + movement.note : ''}</p>
        </li>`;
    })
    .join('');
}

function handleWarehouseForm(event) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const id = crypto.randomUUID ? crypto.randomUUID() : `wh-${Date.now()}`;
  const warehouse = {
    id,
    name: data.get('name'),
    capacity: Number(data.get('capacity')),
    temperature: data.get('temperature'),
    lastAudit: new Date().toISOString().slice(0, 10)
  };
  state.warehouses.push(warehouse);
  persist();
  renderWarehouses();
  event.currentTarget.reset();
}

function handleItemForm(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const item = {
    sku: formData.get('sku').toUpperCase(),
    name: formData.get('name'),
    category: formData.get('category'),
    warehouse: formData.get('warehouse'),
    stock: Number(formData.get('stock')),
    reorder: Number(formData.get('reorder')),
    status: 'optimo',
    lastMovement: now()
  };
  state.items.push(item);
  persist();
  renderInventory();
  renderWarehouses();
  renderKpis();
  event.currentTarget.reset();
}

function handleMovementForm(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const sku = formData.get('sku');
  const type = formData.get('type');
  const quantity = Number(formData.get('quantity'));
  const note = formData.get('note');
  const item = state.items.find((it) => it.sku === sku);
  if (!item) return;

  item.stock = Math.max(0, item.stock + (type === 'entrada' ? quantity : -quantity));
  item.lastMovement = now();
  item.status = computeStatus(item);

  state.movements.push({ sku, type, quantity, note, at: now() });
  persist();
  renderInventory();
  renderMovements();
  renderKpis();
  renderWarehouses();
  event.currentTarget.reset();
}

function handleExport() {
  const headers = ['SKU', 'Producto', 'Almacén', 'Stock', 'Punto de reorden', 'Estado'];
  const rows = state.items.map((item) => [
    item.sku,
    item.name,
    findWarehouse(item.warehouse)?.name ?? 'N/D',
    item.stock,
    item.reorder,
    computeStatus(item)
  ]);
  const csv = [headers, ...rows].map((row) => row.join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `cosigo-inventario-${Date.now()}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function attachEvents() {
  elements.warehouseForm.addEventListener('submit', handleWarehouseForm);
  elements.itemForm.addEventListener('submit', handleItemForm);
  elements.movementForm.addEventListener('submit', handleMovementForm);
  elements.statusFilter.addEventListener('change', renderInventory);
  elements.searchInput.addEventListener('input', renderInventory);
  elements.exportBtn.addEventListener('click', handleExport);
  document.querySelectorAll('.quick-actions button').forEach((button) => {
    button.addEventListener('click', () => {
      quickFilter = button.dataset.filter;
      renderInventory();
    });
  });

  elements.inventoryTable.addEventListener('click', (event) => {
    const action = event.target.dataset.action;
    const sku = event.target.dataset.sku;
    if (action === 'adjust' && sku) {
      const delta = Number(prompt('Cantidad a sumar (número negativo para restar)')); // eslint-disable-line no-alert
      if (Number.isNaN(delta)) return;
      const item = state.items.find((it) => it.sku === sku);
      if (!item) return;
      item.stock = Math.max(0, item.stock + delta);
      item.lastMovement = now();
      persist();
      renderInventory();
      renderKpis();
    }
  });
}

function init() {
  renderWarehouses();
  renderInventory();
  renderKpis();
  renderMovements();
  attachEvents();
}

init();
