'use strict';

(function () {
    var songApp = angular.module('songApp', []);
    var url = 'http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=3b1290c0aeeec4b9937434d3b63bb229';

    var songList = [];

    //SONGS DB SERVICES
    songApp.factory('songDB', function ($http, $q) {
        return {
            loadSongs: function loadSongs() {
                return $q(function (resolve, reject) {
                    $http.get('/playlist/songs/data').then(function (resp) {
                        resolve(resp.data);
                    }, function (err) {
                        reject(err);
                    });
                });
            },
            addSong: function addSong(song) {
                return $q(function (resolve, reject) {
                    $http.post('/playlist/songs', song).then(function (resp) {
                        resolve('success');
                    }, function (err) {
                        reject(err);
                    });
                });
            },
            addVote: function addVote(id) {
                return $q(function (resolve, reject) {
                    $http.patch('/playlist/songs/vote', { id: id }).then(function (resp) {
                        resolve(resp);
                    }, function (err) {
                        reject(err);
                    });
                });
            }
        };
    });

    //SONGS SEARCH SERVICE
    songApp.factory('searchSong', function ($http, $q) {
        return {
            search: function search(song, artist) {
                return $q(function (resolve, reject) {
                    var search = url + '&artist=' + encodeURIComponent(artist) + '&track=' + encodeURIComponent(song) + '&format=json';

                    $http.get(search).then(function (resp) {
                        if (!resp.data.error) {
                            var newSong = {
                                title: resp.data.track.name,
                                artist: resp.data.track.artist.name,
                                link: encodeURIComponent(resp.data.track.name + " " + resp.data.track.artist.name),
                                genre: [],
                                votes: 0
                            };
                            var ytURL = 'https://content.googleapis.com/youtube/v3/search?type=video&q=' + newSong.title + '&maxResults=5&part=snippet&key=AIzaSyAkeOuOoquw23koH3l_cm-A09TvulFO20Q';
                            $http.get(ytURL).then(function (resp) {
                                var id = resp.data.items[0].id.videoId;
                                newSong.link = 'https://www.youtube.com/watch?v=' + id;
                            }).catch(function (err) {
                                console.log(err);
                            });
                            //push array of genre tags to newSong object
                            resp.data.track.toptags.tag.forEach(function (tag) {
                                newSong.genre.push(tag.name);
                            });
                            //return new song object
                            resolve(newSong);
                        } else {
                            reject(resp.data.message);
                        }
                    }, function (resp) {
                        reject(resp.data.message);
                    });
                });
            }
        };
    });

    //PARENT SONG APP CONTROLLER
    songApp.controller('SongsCtrl', function ($scope, songDB) {
        $scope.songs = [];

        $scope.songs = songDB.loadSongs().then(function (data) {
            $scope.songs = data;
        }, function (e) {
            console.log(e);
        });
    });

    //SONG LIST CONTROLLER
    songApp.controller('SongListCntrl', function ($scope, $http, songDB) {

        //add new vote to song(id) and update list without refreshing full song list
        $scope.addVote = function (id, e) {
            e.preventDefault();
            //disable vote button for selected song
            e.currentTarget.setAttribute('disabled', 'true');
            //update songs db with new vote
            songDB.addVote(id).then(function (resp) {
                var i = $scope.songs.findIndex(function (song) {
                    return song._id === resp.data.id;
                });
                $scope.songs[i].votes = resp.data.votes;
            }, function (err) {
                console.log(err);
            });
        };
    });

    //SEARCH SONG CONTROLLER
    songApp.controller('SongSearchCntrl', function ($scope, $http, songDB, searchSong) {
        var $s = $scope;
        $s.search = {
            track: '',
            artist: ''
        };
        $s.result = {};
        $s.found = false;
        $s.error = false;
        $s.errorMsg = '';

        $s.clearResult = function () {
            $s.found = false;
            $s.error = false;
            $s.search.track = '';
            $s.search.artist = '';
        };

        function songInList(song, arr) {
            return arr.some(function (arrSong) {
                return song.toLowerCase() === arrSong.title.toLowerCase();
            });
        }

        $s.searchSong = function (song, artist, e) {
            e.preventDefault();

            if (songInList(song, $scope.songs)) {
                $s.error = true;
                $s.errorMsg = "The song you're looking for is already on the list. Add your vote!";
                $s.result = {};
            } else {
                searchSong.search(song, artist).then(function (data) {
                    $s.result = data;
                    $s.error = false;
                }, function (err) {
                    $s.error = true;
                    $s.errorMsg = err;
                    $s.result = {};
                });
            }

            $s.found = true;
        };

        $scope.addSong = function (track, e) {
            e.preventDefault();
            var newSong = track;

            songDB.addSong(newSong).then(function () {
                $s.found = false;
                location.reload();
            }, function (err) {
                console.log(err);
            });
        };
    });
})();