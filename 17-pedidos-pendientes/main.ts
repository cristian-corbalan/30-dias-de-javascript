'use strict';

function getPedidosPendientes(pedidos: Array<{ id: string, estado: string, prioridad: number }>) {
  return pedidos
    .filter((pedido) => pedido.estado !== 'entregado')
    .sort((a, b) => a.prioridad - b.prioridad || a.id.localeCompare(b.id))
    .map((pedido) => pedido.id);
}