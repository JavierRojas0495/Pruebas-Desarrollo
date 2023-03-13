<!-- Modal -->
<div class="modal fade" id="modalAddCart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Agregar Producto</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
        <div class="card-body">
          <h3 class="card-title text-center"> <strong>  PRODUCTO </strong></h3>
          <h4> <strong>Precio: </strong></h4>
          <p class="card-text"><strong>Referencia:</strong> </p>
          <div class="form-group">
            <div class="row d-block ">
                      
                  <div class="col-6"> 
                      <label>Precio:</label>
                      <input type="text" class="form-input" style="width: 108px; margin-left: 41px;" readonly="readonly" >
                  </div>
                  <div class="row"> 
                        <div>
                          <label style="margin-left: 25px;">Unidades:</label>
                        </div>
                          
                        <div class="form" style="margin-left: 19px;">
                          <a type="button" id="del" class="btn btn-danger">-</a>
                            <input type="text" id="cantProd" class="text-center" style="width: 60px;">
                          <a type="button" id="add" class="btn btn-success">+</a>
                        </div>
                  </div>
                  <div>
                          <label style="margin-left: 13px;">Stock:</label>
                        </div>
                  </div>
                  
            </div>
          </div>

      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Agregar Unidades</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>