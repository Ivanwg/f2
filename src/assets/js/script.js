

function waitDom() {
  return new Promise(resolve => {
    window.addEventListener('DOMContentLoaded', e =>{
      resolve();
    });
  })
}


waitDom().then(res => {

});

