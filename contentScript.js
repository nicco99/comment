function addCommentDropdown(commentElement) {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.innerHTML = `
      <select>
        <option>Does this argument have any logical fallacies? If so, list which ones, how, and the severity of each fallacy.</option>
        <option>hello world</option>
      </select>
    `;
    commentElement.insertAdjacentElement('afterend', dropdownContainer);
  }
  
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        for (const node of mutation.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const commentElements = node.querySelectorAll('.comment, #comment, .comment_aection');
            console.log(commentElements)
            if (commentElements.length > 0) {
              for (const commentElement of commentElements) {
                addCommentDropdown(commentElement);
              }
            }
          }
        }
      }
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });