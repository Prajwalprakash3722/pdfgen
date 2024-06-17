const { pdfGenerator } = require("./helper/pdfGenerator");

async function generatePdf() {
  let data = {
    content: `  <p class="mb-4 text-gray-700 text-justify">
   IEEE RVCE Student Branch in association with the Department of Information Science Engineering is
   conducting the 8th CSITSS Conference in November 2024. CSITSS Conference fuels scientific
   advancement,
   driving societal impact through collaborative research and innovation. To help in the development of
   an
   interactive website for the conference, which will be the only point of contact for authors who wish
   to
   publish at CSITSS, we wish to recruit volunteers for the same. IEEE RVCE requests activity points to
   be
   granted to such active volunteers for their time and support towards advancement of the scientific
   community under the following categories:
</p>
<h1>A Random Table</h1>
<table class="min-w-full bg-white border border-gray-300">
   <thead>
       <tr>
           <th class="py-2 px-4 border-b border-gray-300">Item</th>
           <th class="py-2 px-4 border-b border-gray-300">Description</th>
           <th class="py-2 px-4 border-b border-gray-300">Cost</th>
           <th class="py-2 px-4 border-b border-gray-300">Date</th>
       </tr>
   </thead>
   <tbody>
       <tr>
           <td class="py-2 px-4 border-b border-gray-300">Office Supplies</td>
           <td class="py-2 px-4 border-b border-gray-300">Pens, paper, etc.</td>
           <td class="py-2 px-4 border-b border-gray-300">$100</td>
           <td class="py-2 px-4 border-b border-gray-300">2024-01-01</td>
       </tr>
       <tr class="bg-gray-100">
           <td class="py-2 px-4 border-b border-gray-300">Travel</td>
           <td class="py-2 px-4 border-b border-gray-300">Conference in NY</td>
           <td class="py-2 px-4 border-b border-gray-300">$500</td>
           <td class="py-2 px-4 border-b border-gray-300">2024-02-15</td>
       </tr>
       <tr>
           <td class="py-2 px-4 border-b border-gray-300">Marketing</td>
           <td class="py-2 px-4 border-b border-gray-300">Ad campaign</td>
           <td class="py-2 px-4 border-b border-gray-300">$300</td>
           <td class="py-2 px-4 border-b border-gray-300">2024-03-10</td>
       </tr>
       <tr class="bg-gray-100">
           <td class="py-2 px-4 border-b border-gray-300">Software</td>
           <td class="py-2 px-4 border-b border-gray-300">Subscription fees</td>
           <td class="py-2 px-4 border-b border-gray-300">$200</td>
           <td class="py-2 px-4 border-b border-gray-300">2024-04-05</td>
       </tr>
       <tr>
           <td class="py-2 px-4 border-b border-gray-300">Maintenance</td>
           <td class="py-2 px-4 border-b border-gray-300">Server upkeep</td>
           <td class="py-2 px-4 border-b border-gray-300">$150</td>
           <td class="py-2 px-4 border-b border-gray-300">2024-05-20</td>
       </tr>
   </tbody>
</table>
`,
    signatories: [
      {
        name: "Prajwal P",
        role: "Webmaster",
        organization: "IEEE RVCE",
        signedAt: "17/06/2024 21:06",
        signLink: "https://i.ibb.co/6WWGk5r/sign.jpg",
      },
      {
        name: "Dr Shyalashree N",
        role: "Branch Counselor",
        organization: "IEEE RVCE",
        signedAt: "17/06/2024 21:06",
        signLink: "https://i.ibb.co/6WWGk5r/sign.jpg",
      },
      {
        name: "Dr B V Uma",
        role: "Dean Student Affairs",
        organization: "RVCE",
        signedAt: "17/06/2024 21:06",
        signLink: "https://i.ibb.co/6WWGk5r/sign.jpg",
      },
      {
        name: "Dr. K N Subramanya",
        role: " Principal & Professor",
        organization: "RVCE",
        signedAt: "17/06/2024 21:06",
        signLink: "https://i.ibb.co/6WWGk5r/sign.jpg",
      },
    ],
    event: "CSITSS Conference",
    generated_date: new Date().toLocaleDateString(),
    images: [
      {
        url: "https://i.ibb.co/m9XkRL7/rv-logo.png",
        alt: "RV Logo",
      },
      {
        url: "https://i.ibb.co/RYCh2YR/IEEE-RVCE.png",
        alt: "IEEE RVCE Logo",
      },
      {
        url: "https://i.ibb.co/Nmhsm4h/IEEE.png",
        alt: "IEEE Logo",
      },
    ],
    eventId:3
  };

  const fileName = "event";
  let buffer = await pdfGenerator(fileName, data);

  //you can use this buffer if you want to upload this file to mysql blob
}
generatePdf();
