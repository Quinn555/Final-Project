let comments = [];


function addComment(comment) {
    let commentHTML = '<li class="comment">' +
    '<p class="name">' + comment.name + '</p>' +
    '<p class="content">' + comment.content + '</p>' +
    '<div class="actions">' +
    '<button class="edit-comment">Edit</button>' +
    '<button class="delete-comment">Delete</button>' +
    '</div>' +
    '</li>';

    $('#comment-list').prepend(commentHTML);
}


function deleteComment(comment) {
    comment.remove();
}


function editComment(comment) {
    let name = comment.find('.name').text();
    let content = comment.find('.content').text();

    let editHTML =
    '<input type="text" class="edit-name" value="' + name + '">' +
    '<textarea class="edit-content">' + content + '</textarea>' +
    '<button class="save-edit">Save</button>';

    comment.html(editHTML);
}

function saveEdit(comment) {
    var name = comment.find('.edit-name').val();
    var content = comment.find('.edit-content').val();

    var updatedHTML =
      '<p class="name">' + name + '</p>' +
      '<p class="content">' + content + '</p>' +
      '<div class="actions">' +
      '<button class="edit-comment">Edit</button>' +
      '<button class="delete-comment">Delete</button>' +
      '</div>';

    comment.html(updatedHTML);
}

$('#submit-comment').click(function() {
    let name = $('#name').val();
    let content = $('#comment').val();

    let comment = {
    name: name,
    content: content
    };

    comments.push(comment);
    addComment(comment);

    $('#name').val('');
    $('#comment').val('');
});

$('#comment-list').on('click', '.delete-comment', function() {
    var comment = $(this).closest('.comment');
    deleteComment(comment);
});

$('#comment-list').on('click', '.edit-comment', function() {
    let comment = $(this).closest('.comment');
    editComment(comment);
});

$('#comment-list').on('click', '.delete-comment', function() {
    let comment = $(this).closest('.comment');
    deleteComment(comment);
});

$('#comment-list').on('click', '.save-edit', function() {
    let comment = $(this).closest('.comment');
    saveEdit(comment);
});

for (let i = comments.length - 1; i >= 0; i--) {
    addComment(comments[i]);
}

  