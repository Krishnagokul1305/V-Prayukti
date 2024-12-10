export function parseHTMLToList(html) {
  // Create a temporary DOM element to parse the HTML
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Select all <strong> elements with associated text
  const items = Array.from(doc.querySelectorAll("p > strong")).map((strong) => {
    // Get the bolded text
    const title = strong.textContent.trim();
    // Get the rest of the text content of the parent <p>
    const content = strong.parentNode.textContent
      .replace(title, "") // Remove the title
      .trim();
    return `${title} ${content}`;
  });

  return items;
}

export function convertMembersToTeamMembersFormat(members) {
  const teamMembers = members.reduce((acc, member, index) => {
    acc[`member${index + 1}`] = {
      name: member.name,
      email: member.email,
      phone: member.phone,
    };
    return acc;
  }, {});

  return JSON.stringify(teamMembers);
}

export function transformToCoordinators(input) {
  if(!input) return [];
  return input
    .split("\n") 
    .map((line) => {
      const [name, phoneNo] = line.split(" - ").map((part) => part.trim()); 
      return { name, phoneNo }; 
    })
    .filter(({ name, phoneNo }) => name && phoneNo); 
}