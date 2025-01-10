const categories = ['Text Recognition', 'Text Localization', 'Table Recognition', 'Table Cell Localization', 'Key Information Extraction', 
  'Document Forgery Detection', 'Document Question Answering', 'Chart Question Answering', 'Infographic Question Answering',
]; // Add more as needed

const categoryMap = {
  text_recognition: "Text Recognition",
  text_localization: "Text Localization",
  table_recognition: "Table Recognition",
  table_cell_localization: "Table Cell Localization",
  key_information_extraction: "Key Information Extraction",
  document_forgery_detection: "Document Forgery Detection",
  document_question_answering: "Document Question Answering",
  chart_question_answering: "Chart Question Answering",
  infographic_question_answering: "Infographic Question Answering",
  counting: "Counting",
  arithmetic_reasoning: "Arithmetic Reasoning",
  logical_reasoning: "Logical Reasoning",
  spatial_reasoning: "Spatial Reasoning",
  comparison: "Comparison",
  sorting: "Sorting",
};

document.addEventListener('DOMContentLoaded', () => {
  const displayArea = document.getElementById('displayArea');
  const nestedItems = document.querySelectorAll('.nested-item');
  const selectedGroupTitle = document.getElementById('selectedGroupTitle');


  // Add event listeners to nested items
  nestedItems.forEach(item => {
    item.addEventListener('click', () => {
      const category = item.getAttribute('data-category');
      const group = item.closest('.dropdown-item').textContent.trim().split('\n')[0]; // Extract group name
      selectedGroupTitle.textContent = `${group} - ${item.textContent}`;
      displayCategory(category);
    });
  });

  // Function to display image-text pairs
  function displayCategory(category) {
    displayArea.innerHTML = ''; // Clear previous content

    fetch(`examples/${category}/data.json`) // Assuming a `data.json` file in each folder
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const pairContainer = document.createElement('div');
          pairContainer.className = 'pair-container';

          const image = document.createElement('img');
          image.src = `examples/${category}/${item.image}`;
          image.alt = item.text;

          const text = document.createElement('p');
          text.innerHTML = item.text;

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



