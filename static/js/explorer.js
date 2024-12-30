document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById('categorySelect');
  const displayArea = document.getElementById('displayArea');

  // List of categories (subfolder names)
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

  // Populate the dropdown with display names
  Object.entries(categoryMap).forEach(([folderName, displayName]) => {
    const option = document.createElement('option');
    option.value = folderName;
    option.textContent = displayName;
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
          //text.textContent = item.text;
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
