var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var description = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(description));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editbtn=document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  editbtn.className='btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  editbtn.appendChild(document.createTextNode('Edit'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editbtn);

  // Append li to list
  itemList.appendChild(li);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    var description = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}