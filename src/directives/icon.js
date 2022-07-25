export default {
  beforeMount(el,binding) {
    let iconClass = `fa fa-${binding.value} text-xl`;

    if(binding.arg === 'full'){
      iconClass = binding.value;
    }

    if(binding.modifiers.right){
      iconClass += ' float-right';
    }
    if(binding.modifiers.rose){
      iconClass += ' text-rose-400';
    }else{
      iconClass += ' text-sky-400';
    }

    el.innerHTML += `<i class="${iconClass}"></i>`
  },

};