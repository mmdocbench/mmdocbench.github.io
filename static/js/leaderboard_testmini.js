function generateTable() {
  var data = score_table; // The variable from model_scores.js

  var table = '<table class="js-sort-table" id="results">';
  table += `<tr>
          <td class="js-sort-number"><strong>#</strong></td>
          <td class="js-sort"><strong>Model</strong></td>
          <td class="js-sort"><strong>Type</strong></td>
          <td class="js-sort"><strong>Source</strong></td>
          <td class="js-sort"><strong>Date</strong></td>
          <td class="js-sort-number"><strong><u>EM All</u></strong></td>
          <td class="js-sort-number"><strong>F1 All</strong></td>
          <td class="js-sort-number"><strong>IOU All</strong></td>
          <td class="js-sort-number"><strong>EM VP</strong></td>
          <td class="js-sort-number"><strong>F1 VP</strong></td>
          <td class="js-sort-number"><strong>IOU VP</strong></td>
          <td class="js-sort-number"><strong>EM VR</strong></td>
          <td class="js-sort-number"><strong>F1 VR</strong></td>
          <td class="js-sort-number"><strong>IOU VR</strong></td>

      </tr>`;

      // sort data to make sure the best model is on top
      first_row = '-' // "Human Performance*"
      console.log(data);

      // get all keys in data
      var keys = Object.keys(data);

      // // remove "Human Performance*" from keys
      // var index = keys.indexOf(first_row);
      // if (index > -1) {
      //   keys.splice(index, 1);
      // }

      // // add "Human Performance*" to the top of keys
      // keys.unshift(first_row);

      // console.log(keys);

      // for (var key in data) {
      for (var i=0; i<keys.length; i++) {
        var key = keys[i];
        console.log(key);
        var entry = data[key];

        table += '<tr>';
        table += `<td>${key}</td>`

        // for key = "1", "2", "3"
        top_ranks = ["1", "2", "3"]
        if (top_ranks.includes(key)) {
          table += `<td><b class="best-score-text">${entry.Model}</b></td>`;
          table += `<td>${entry.Type}</td>`;
          table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          table += `<td>${entry.Date}</td>`;
          table += `<td><b class="best-score-text">${entry.EM_ALL.toFixed(2).toString()}</b></td>`; // .toFixed(1): round to 1 decimal place
        }
        else {
          table += `<td><b>${entry.Model}</b></td>`;
          table += `<td>${entry.Type}</td>`;
          table += `<td><a href="${entry.Source}" class="ext-link" style="font-size: 16px;">Link</a></td>`;
          table += `<td>${entry.Date}</td>`;
          table += `<td><b>${entry.EM_ALL.toFixed(2).toString()}</b></td>`; // .toFixed(1): round to 1 decimal place
        }



        table += `<td>${isNaN(entry.F1_ALL) ? "-" : entry.F1_ALL.toFixed(2).toString()}</td>`;
        table += `<td>${isNaN(entry.IOU_ALL) ? "-" : entry.IOU_ALL.toFixed(2).toString()}</td>`;
        table += `<td>${isNaN(entry.EM_VP) ? "-" : entry.EM_VP.toFixed(2).toString()}</td>`;
        table += `<td>${isNaN(entry.F1_VP) ? "-" : entry.F1_VP.toFixed(2).toString()}</td>`;
        table += `<td>${isNaN(entry.IOU_VP) ? "-" : entry.IOU_VP.toFixed(2).toString()}</td>`;
        table += `<td>${isNaN(entry.EM_VR) ? "-" : entry.EM_VR.toFixed(2).toString()}</td>`;
        table += `<td>${isNaN(entry.F1_VR) ? "-" : entry.F1_VR.toFixed(2).toString()}</td>`;
        table += `<td>${isNaN(entry.IOU_VR) ? "-" : entry.IOU_VR.toFixed(2).toString()}</td>`;

        // table += `<td>${entry.F1_ALL.toFixed(1).toString()}</td>`;
        // table += `<td>${entry.IOU_ALL.toFixed(1).toString()}</td>`;
        // table += `<td>${entry.EM_VP.toFixed(1).toString()}</td>`;
        // table += `<td>${entry.F1_VP.toFixed(1).toString()}</td>`;
        // table += `<td>${entry.IOU_VP.toFixed(1).toString()}</td>`;
        // table += `<td>${entry.EM_VR.toFixed(1).toString()}</td>`;
        // table += `<td>${entry.F1_VR.toFixed(1).toString()}</td>`;
        // table += `<td>${entry.IOU_VR.toFixed(1).toString()}</td>`;

        
        // if entry.FQA is a number
        // if (!isNaN(entry.FQA)) {
        //   table += `<td>${entry.EM_ALL.toFixed(1).toString()}</td>`;
        //   table += `<td>${entry.F1_ALL.toFixed(1).toString()}</td>`;
        //   table += `<td>${entry.IOU_ALL.toFixed(1).toString()}</td>`;
        //   table += `<td>${entry.EM_VP.toFixed(1).toString()}</td>`;
        //   table += `<td>${entry.F1_VP.toFixed(1).toString()}</td>`;
        //   table += `<td>${entry.IOU_VP.toFixed(1).toString()}</td>`;
        //   table += `<td>${entry.EM_VR.toFixed(1).toString()}</td>`;
        //   table += `<td>${entry.F1_VR.toFixed(1).toString()}</td>`;
        //   table += `<td>${entry.IOU_VR.toFixed(1).toString()}</td>`;
        // }
        // else {
        //   table += `<td>${entry.EM_ALL.toString()}</td>`;
        //   table += `<td>${entry.F1_ALL.toString()}</td>`;
        //   table += `<td>${entry.IOU_ALL.toString()}</td>`;
        //   table += `<td>${entry.EM_VP.toString()}</td>`;
        //   table += `<td>${entry.F1_VP.toString()}</td>`;
        //   table += `<td>${entry.IOU_VP.toString()}</td>`;
        //   table += `<td>${entry.EM_VR.toString()}</td>`;
        //   table += `<td>${entry.F1_VR.toString()}</td>`;
        //   table += `<td>${entry.IOU_VR.toString()}</td>`;
        // }
        table += '</tr>';
    }

  table += '</table>';
  document.getElementById('testmini_leaderboard').innerHTML = table; // Assuming you have a div with id 'container' where the table will be placed
}

// Call the function when the window loads
window.onload = generateTable;
