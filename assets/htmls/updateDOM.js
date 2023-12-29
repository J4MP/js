function lanzarCodigo(codigo) {
  if (codigo) {
    var render = new Function(codigo);
    render();
  }
}

function reload() {
  document.location.reload();
}
