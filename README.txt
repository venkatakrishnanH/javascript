1. HTML Form Creation: You’ve created a form in HTML where users can input a student’s name, age, gender, course, and email. This form is designed to capture data without submitting it to a server, as there’s no form tag or action attribute specified.
2. Styling with CSS: The CSS within the <style> tags applies a border to the table and its elements, making the data more readable once it’s displayed.

3. JavaScript for Dynamic Interaction:
o When the “Save” button is clicked, the addStudent() function is triggered.
o This function retrieves the values from the input fields using document.getElementById() for the name, age, course, and email, and document.querySelector() for the checked gender radio button.
o A new row is then inserted at the end of the table with insertRow(-1).
o Individual cells (<td>) are created for each piece of data and appended to the new row.
o The gender value is correctly retrieved by checking which radio button is selected.
o A “Delete” button is also added to each row, which calls the deleteRow() function when clicked.
4. Deleting Rows:
o The deleteRow() function allows the removal of a student’s entry from the table.
o It does this by identifying the button’s parent row and removing it from the table’s DOM structure.
5. Result:c
o The result is a dynamic table that grows with each new student entry and allows for individual entries to be removed.
This code is a simple yet effective way to manage student data on the client side without the need for server-side processing. It demonstrates the basics of DOM manipulation with JavaScript and can be the foundation for more complex applications.

