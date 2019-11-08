$(document).ready(function(){
    $('select').formSelect();
  });
    $(document).ready(function(){
    $('input#input_text, textarea#textarea2').characterCounter();
  });

 var parametros ={
      "nome":$("#nome").val(),
      "entrada":horaEntrada+":"+minutoEntrada+":00",
      "saida":horaSaida+":"+minutoSaida+":00",
      "funcao":$("option:selected",("#funcao")).text(),
      "valor": total.toFixed(2)
  };
  $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://estacionamentoetec.000webhostapp.com/cadastrar.php",//para onde vou enviar
      data:parametros,//o que eu vou enviar
      //caso esteja tudo certo executa esse codigo
      success: function(data){
     alert(data);
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
      alert("Erro ao cadastrar!");
      }
    });
$(document).on("click","#buscarRegistro",function(){
  var parametro ={
      "nome":$("#nomeBusca").val()
    };
    
    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://estacionamentoetec.000webhostapp.com/buscar.php",//para onde vou enviar
      data:parametro,
      dataType:"json",
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        $("#nome").val(data.funcionario.nome);
        $("#funcao").val(data.funcionario.funcao);
        $("#entrada").val(data.funcionario.entrada);
        $("#saida").val(data.funcionario.saida);
        $("#valor").val(data.funcionario.valor);
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao buscar registros!");
      }
    });
});