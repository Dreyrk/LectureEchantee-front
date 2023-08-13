function isFav(user, manhwa) {
  if (user.library.manhwa[0]) {
    return user.library.manhwa.some((el) => el._id === manhwa._id);
  }
  return false;
}

export default isFav;
