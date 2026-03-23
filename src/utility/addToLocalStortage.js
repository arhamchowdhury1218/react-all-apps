const getStoredApps = () => {
  const storedAppSTR = localStorage.getItem("appList");

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storedAppData = getStoredApps();

  if (storedAppData.includes(id)) {
    // alert("already app exist");
  } else {
    storedAppData.push(id);
    const data = JSON.stringify(storedAppData);
    localStorage.setItem("appList", data);
  }
};

const removeFromStoreDB = (id) => {
  const storedAppData = getStoredApps();

  const updatedApps = storedAppData.filter((appId) => appId !== id);

  localStorage.setItem("appList", JSON.stringify(updatedApps));
};

export { addToStoreDB, getStoredApps, removeFromStoreDB };
