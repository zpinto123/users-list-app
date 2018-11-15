const errors = {
  userListFetch: (lang = "EN") => {
    const languages = {
      EN: "There was a problem fetching the user list. Please try again.",
      PT:
        "Houve um problema a mostrar a lista de utilizadores. Por favor tente mais tarde."
    };
    return languages[lang];
  }
};

export default errors;
