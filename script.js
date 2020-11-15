const encipher = (message, key) => {

    // ensure key is a number
    if (isNaN(key)) {
      return 'Provide a numeric value as your <key>';
    }
  
    message = message.split('');
  
    const ciphertext = [];
  
    // iterate through the array of split words/message
    message.forEach(i => {
  
      // convert the split message into ascii value
      let str = i.charCodeAt();
  
      if (i === i.toLowerCase()) {
        ciphertext.push(String.fromCharCode((((str - 71) - key) % 26) + 97))
      }
      else if (i === i.toUpperCase()) {
        ciphertext.push(String.fromCharCode((((str - 39) - key) % 26) + 65))
      }
      else {ciphertext.push(str)}
    });
    return ciphertext.join('');
  }
  
  const decipher = (message, key) => {
  
    // ensure key is a number
    if (isNaN(key)) {
      return 'Provide a numeric value as your <key>';
    }
  
    message = message.split('');
  
    const ciphertext = [];
  
    // iterate through the array of split words/message
    message.forEach(i => {
  
      // convert the split message into ascii value
      let str = i.charCodeAt();
  
      if (i === i.toLowerCase()) {
        ciphertext.push(String.fromCharCode((((str - 97) + key) % 26) + 97))
      }
      else if (i === i.toUpperCase()) {
        ciphertext.push(String.fromCharCode((((str - 65) + key) % 26) + 65))
      }
      else {ciphertext.push(str)}
    });
    return ciphertext.join('');
  }
  
  
  let cipercode = {
    init: () => {
      const encryptBtn = document.getElementById('encrypt');
      const decryptBtn = document.getElementById('decrypt');
  
      encryptBtn.onclick = cipercode.callEncipher;
      decryptBtn.onclick = cipercode.callDecipher;
  
    },
    callEncipher: () => {
      const message = document.getElementById('message');
      const key = document.getElementById('key');
      const outputMessage = document.getElementById('outputMessage');
  
      let messageToEncipher = message.value;
      let keyToUse = Number(key.value);
      let EncipheredText = encipher(messageToEncipher, keyToUse);
      outputMessage.innerHTML = EncipheredText;
    },
    callDecipher: () => {
      const message = document.getElementById('message');
      const key = document.getElementById('key');
      const outputMessage = document.getElementById('outputMessage');
  
      let messageToDecipher = message.value;
      let keyToUse = Number(key.value);
      let decipheredText = decipher(messageToDecipher, keyToUse)
      outputMessage.innerHTML = decipheredText;
    }
  };
  
  window.onload = cipercode.init;