document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById('categorySelect');
  const displayArea = document.getElementById('displayArea');

  // List of categories (subfolder names)
  const categories = ['category1', 'category2', 'category3']; // Add more as needed

  // Populate the dropdown
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });

  // Handle category selection
  categorySelect.addEventListener('change', () => {
    const selectedCategory = categorySelect.value;
    displayCategory(selectedCategory);
  });

  // Function to display image-text pairs
  function displayCategory(category) {
    displayArea.innerHTML = ''; // Clear previous content

    fetch(`results/${category}/data.json`) // Assuming a `data.json` file in each folder
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const pairContainer = document.createElement('div');
          pairContainer.className = 'pair-container';

          const image = document.createElement('img');
          image.src = `results/${category}/${item.image}`;
          image.alt = item.text;

          const text = document.createElement('p');
          text.textContent = item.text;

          pairContainer.appendChild(image);
          pairContainer.appendChild(text);
          displayArea.appendChild(pairContainer);
        });
      })
      .catch(err => {
        console.error('Error loading category data:', err);
      });
  }
});
