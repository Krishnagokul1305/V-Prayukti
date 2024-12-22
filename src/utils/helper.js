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
  if (!input) return [];
  return input.split("\n");
}

export function parseEventDetails(input) {
  if (!input) return [];
  const parts = input.split("+").map((part) => part.trim());
  return parts;
}

export function createOrderedList(input) {
  // Split the input by newline characters
  const items = input.split("\n");

  // Generate the HTML <ol> structure
  let ol = "<ol>\n";
  items.forEach((item) => {
    // Trim whitespace and skip empty lines
    if (item.trim()) {
      ol += `  <li>${item.trim()}</li>\n`;
    }
  });
  ol += "</ol>";

  return ol;
}

export function parseRequirements(requirementString) {
  const [hardware, software] = requirementString.split("|");
  return {
    hardware: hardware.trim(),
    software: software.trim(),
  };
}
