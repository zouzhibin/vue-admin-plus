import {Module} from "vuex";
import {PRIMARY_COLOR} from "../../config";
const state = {
    themeConfig:{
        showSetting:false,
        // 菜单展示模式 默认 vertical   horizontal / vertical
        mode: 'vertical',
        // tagsView 是否展示 默认展示
        showTag:true,
        // 页脚
        footer: true,
        // 深色模式 切换暗黑模式
        isDark: false,
        // 显示侧边栏Logo
        showLogo:true,
        // 主题颜色
        primary:PRIMARY_COLOR,
        // element组件大小
        globalComSize:'default',
        // 中英文切换，默认中文
        language:'zh'

    },
}

const mutations = {
    SET_THEME_CONFIG : (state, {key, val}) => {
        state.themeConfig[key] = val
    },
}
const actions = {
    setThemeConfig({ commit }, data) {
        commit('SET_THEME_CONFIG', data)
    },
}


const setting:Module<any, any> = {
    namespaced:true,
    state,
    mutations,
    actions
}

export default setting
