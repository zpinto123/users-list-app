const errors = {
  userListFetchFail: (lang = "EN") => {
    const languages = {
      EN: "There was a problem fetching the users list. Please refresh the page.",
      PT:
        "Houve um problema a mostrar a lista de utilizadores. Por favor refresque a página."
    };
    return languages[lang];
  }
};

export default errors;
