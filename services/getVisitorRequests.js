const getVisitorRequests = async (house, block) => {
  return;
  try {
    const invitesRef = await firestore().collection("house_visitors").get();
    let invites = [];
    invitesRef.docs.forEach(doc => {
      if (
        doc.data().house_no.block === block &&
        doc.data().house_no.house === house
      ) {
        invites.push({ ...doc.data(), id: doc.id });
      }
    });
    return invites;
  } catch (e) {
    console.log(e);
  }
};
export default getVisitorRequests;
