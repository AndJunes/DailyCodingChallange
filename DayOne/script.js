function canPost(message) {
  if (message.length <= 40) {
    return "short post";
  } else if (message.length <= 80) {
    return "long post";
  } else {
    return "invalid post";
  }
}

// Conectamos la función con los elementos del HTML
const input = document.getElementById("messageInput");
const button = document.getElementById("postBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const message = input.value.trim();

  if (message === "") {
    result.textContent = "Please write something first!";
    result.style.color = "rgba(243, 107, 107, 1)";
    
    // Eliminar el mensaje después de 1 segundos
    setTimeout(() => {
      result.textContent = "";
    }, 1000);
    
  } else {
    const postType = canPost(message);
    result.textContent = `Your message is a ${postType}.`;
    result.style.color =
      postType === "invalid post" ? "rgba(243, 107, 107, 1)" : "rgba(230, 157, 213, 1)";
    
    // Eliminar el mensaje después de 1 segundos
    setTimeout(() => {
      result.textContent = "";
    }, 1000);
  }

  input.value = "";
});