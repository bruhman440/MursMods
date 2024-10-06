 ModAPI.require("player");

function loginModFunc(e){
  for (let i = 5; i >= 0; i--) {
    ModAPI.player.sendChatMessage({message:"my cock hurts"})
  }
};
    
ModAPI.addEventListener("key",loginModFunc)
