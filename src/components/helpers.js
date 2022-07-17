export function renderContactList(filter = '', contacts = []) {
  const filterLowered = filter.toLowerCase();
  return contacts.filter(cont =>
    cont.name.toLowerCase().includes(filterLowered)
  );
}
