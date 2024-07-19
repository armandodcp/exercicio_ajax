$(function () {
    const endpoint = 'https://api.github.com/users/armandodcp';

    fetch(endpoint).then(function (resposta) {
        return resposta.json();
    })
        .then(function (json) {
            const avatar = json.avatar_url;
            const name = json.name;
            const username = json.login;
            const repositories = json.public_repos;
            const followers = json.followers;
            const following = json.following;
            const link = json.html_url;

            $('#avatar').attr('src', avatar);
            $('#name').text(name);
            $('#username').text(username);
            $('#repositories').text(repositories);
            $('#followers').text(followers);
            $('#following').text(following);
            $('#link').attr('href', link);
        })
        .catch(function (error) {
            alert('Houve um problema com a operação de busca');
        })
        .finally(function () {
            console.log('Operação de busca concluída.');
        });
});