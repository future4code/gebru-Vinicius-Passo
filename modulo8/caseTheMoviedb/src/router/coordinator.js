export const goToFeed = (navigate) => {
    navigate("/");
}

export const gotToMovieDetail = (navigate, id) => {
    navigate(`/filme/detalhe/${id}`);
}

export const gotoBack = (navigate) => {
    navigate(-1)
}