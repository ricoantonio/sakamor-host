// const onLogin = (values) => {
//   fetch(
//     `http://10.100.4.116:8229/api/user/login?username=${values.username}&&password=${values.password}`,
//     {
//       method: "post",
//     }
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       if (data.status === 404) {
//         setWrongUser(true);
//         console.log(data);
//       } else {
//         setWrongUser(false);
//         actions.userLogin(data);
//         Router.push("/");
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       setWrongUser(true);
//     });
// };

// const getAuth = () => {
//   fetch(
//     `http://10.100.4.116:8229/api/User/GetAuthorize?username=${userData.username}`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       var auth = data.filter((val) => {
//         return val.moduleCode === "PLAN";
//       });
//       var menu = userMenu.filter((val) => {
//         return val.moduleCode === "PLAN";
//       });
//       if (!(auth && menu)) {
//         Router.push("/");
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const getMenu = (username) => {
//   fetch(`http://10.100.4.116:8229/api/user/getmenu?username=${username}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// const getMasterVisitPlan = () => {
//   fetch("http://10.100.4.116:8230/api/MasterVisitPlan/GetAllMasterVisitPlan")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       setPlan(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const getVisitPlanByID = () => {
//   fetch(
//     `http://10.100.4.116:8230/api/MasterVisitPlan/GetMasterVisitPlanById/${router.query.id}`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setPlan(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const getPosmList = () => {
//   fetch(
//     `http://10.100.4.116:8230/api/ActivityVisitPlanDPOSM/GetAllActivityVisitPlanDposm`
//   )
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setPosm(data);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// const getProductBySearch = () => {
//   fetch(`http://10.100.4.116:8233/api/MasterData/GetProdukLike/${search}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       setProduct(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// export default getMenu;
