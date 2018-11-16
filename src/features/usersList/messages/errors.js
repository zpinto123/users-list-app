const errors = {
  userListFetchFail: (lang = "en-US") => {
    const languages = {
      'en-US': "There was a problem fetching the users list. Please refresh the page.",
      'pt-PT':
        "Houve um problema a mostrar a lista de utilizadores. Por favor refresque a página."
    };
    return languages[lang];
  }
};

export default errors;
