$(function () {
    // Adds form data table
    $(".form").on("submit", function (e) {
        e.preventDefault();
        const title = $(".form-title").val();
        const rating = $(".form-rating").val();

        const titleRatingData = { title, rating };

        $(".tbody").append(makeNewRow(titleRatingData));
        $(".form")[0].reset();
    });

// When clicked will remove the closet tr 
    $(".tbody").on("click", ".delete-button", function(){
        $(this).closest('tr').remove()
    })

// Create new row, populate cells and adds delete button
    function makeNewRow(data) {
        return `
        <tr>
            <td>${data.title}</td>
            <td>${data.rating}</td>
            <td>
             <button class="delete-button">
                Delete
             </button>
            </td>
        </tr>`;
    }
});
