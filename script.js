    
    const titleContent = document.getElementById('titleContent');
    const editableTitle = document.getElementById('editableTitle');
    const dateContent = document.getElementById('dateContent');
    const editableDate = document.getElementById('editableDate');    
    
    const commentForm = document.getElementById('commentForm');
    const commentText =document.getElementById('commentText');
    const commentContainer = document.getElementById('commentContainer');

    
    editableTitle.addEventListener('click', function() {
        editableTitle.setAttribute('contenteditable', 'true');
        editableTitle.focus();
    });
    
    editableTitle.addEventListener('blur', function() {
        editableTitle.removeAttribute('contenteditable');
    });
    
    editableDate.addEventListener('click', function() {
        editableDate.setAttribute('contenteditable', 'true');
        editableDate.focus();
    });
    
    editableDate.addEventListener('blur', function() {
        editableDate.removeAttribute('contenteditable');
    });
    

    function addcomment(text){
        const commentDiv = document.createElement('div');
            commentDiv.classList.add("com1");
            commentDiv.innerHTML = `
                <div class="comimg">
                    <img src="https://s3-alpha-sig.figma.com/img/1099/2dd1/50bf7910cc579cb35352125504544458?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ecYuzGm1qsTlZ3EGTaEQgNsZeSLsRAOk7TyOsyt9IkhQFvH8Qg1cg0ex-UE0dvs~rKrTpCjP9rBiB6k0S453StdPwBq4DocNGSfk~bE6YaDciekQyXRBrxmndskwdlBlnBtiBM21TSVAZIxfjIg1Y6ZObOztQYCIOBk4F4betUZ3iQWRm0DugWjG8Xw0M0nSFqz0PzjP--4MZfN-nuMl7gzAjC7m~jSGY~9ThDcZ~oDXP0rzY1wwqlL6bGPm7QS1L1NN47Anfb5Yv0TxDDjuAr7-Q-3X2iarmh1OzpEFMTg6r9-ylYk958hpRXPbkWoZ18pw88S9~iolQh4cklVReA__" 
                    alt="profile" width="25px" height="25px">
                </div>
                <div class="comBox">
                    <div class="commentContent">Jane Smith<br>
                        <span>${text}</span>
                    </div>
                    <div class="buttons">
                        <button id="editButton" onclick="handleEdit(this)">
                           <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button id="deleteButton" onclick="handleDelete(this)">
                           <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>`;
        
        commentContainer.appendChild(commentDiv);

    }   
    
    function handleSubmit(e){
        e.preventDefault();
        const text = commentText.value.trim();
        if(text !== ""){
            addcomment(text);
        }
        commentText.value='';
    }

    function handleDelete(deleteButton){
        let del = deleteButton.parentNode.parentNode.parentNode;
        del.parentNode.removeChild(del)
    }

    function handleEdit(editButton) {
        const commentContent = editButton.parentElement.previousElementSibling;
        const newText = prompt("Edit your comment:", commentContent.querySelector('span').innerText);
        if (newText !== null) {
            commentContent.querySelector('span').innerText = newText;
        }
    }
    
    
commentForm.addEventListener('submit',handleSubmit);
    