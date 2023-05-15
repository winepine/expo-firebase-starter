const addVehicle = async houseObject => {
  return;
  try {
    firestore()
      .collection("houses")
      .doc(houseObject.id)
      .update(houseObject)
      .then(() => {
        console.log("Updated Successfully!");
      });
  } catch (e) {
    console.log(e);
  }
};
export { addVehicle };
