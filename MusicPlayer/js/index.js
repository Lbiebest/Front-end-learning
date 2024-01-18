import { createApp, ref } from "https://cdn.jsdelivr.net/npm/vue@3/dist/vue.esm-browser.js";


const wrap = createApp({
    setup() {
        const musicName = ref(''); // 音乐名称
        const musicList = ref([]); // 音乐列表
        const musicUrl = ref(""); // 音乐url
        const musicCover = ref(""); // 音乐封面
        const isPlaying = ref(false) // 播放状态

        const searchMusic = async (musicName) => {
            try {
                // https://autumnfish.cn/search?keywords=
                // 此接口已失效，建议采用本地接口
                // https://neteasecloudmusicapi.vercel.app/#/
                const response = await axios.get(`http://localhost:3000/searchMusic?id=${musicName}`);
                console.log(response);
                // 设置歌曲信息
                musicList.value = response.data.result.songs;

            } catch (err) {
                console.log(err);
            }
        };

        const playMusic = async (musicId) => {
            // console.log(musicId);
            try {
                //https://autumnfish.cn/song/url?id=
                // 此接口已失效，采用其他接口
                //https://api.paugram.com/netease/?id=
                const response = await axios.get(`http://localhost:3000/playMusic?id=${musicId}`);
                // console.log(response);
                musicUrl.value = response.data.link;
            } catch (error) {
                console.log(error);
            }
        };

        const infoMusic = async (musicId) => {
            try {
                const response = await axios.get(`http://localhost:3000/infoMusic?id=${musicId}`);
                musicCover.value = response.data.cover;
            } catch (error) {
                console.log(error);
            }
        };

        // 评论容器放弃，api失效
        /*  const commentMusic = async (musicId) => {
             try {
                 const response = await axios.get(`http://localhost:3000/infoMusic?type=0&id=${musicId}`);
                 
             } catch (error) {
                 console.log(error);
             }
         } */

        const play = () => {
            // console.log(play);
            isPlaying.value = true;
        };

        const pause = () => {
            // console.log(pause);
            isPlaying.value = false;
        }

        return {
            musicName, musicList, musicUrl,
            searchMusic, playMusic, infoMusic,play,pause
            // commentMusic
        }
    }
});
wrap.mount(".wrap")