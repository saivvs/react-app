import {observable,action,reaction,computed} from 'mobx';


class ThemeStore{
    
    @observable selectedTheme
    
    constructor(){
        this.selectedTheme = ThemeStore.themeMode.dark;
    }
    static themeMode={
        light: {
            id: '0',
            themeButtonText: 'LIGHT',
            BackgroundColor: 'fff',
            cellbackgroundColor: '#48bb78;',
            cellbgColor: 'rgb(74, 85, 104)',
            color: 'black',
        },
        dark: {
            id: '1',
            themeButtonText: 'DARK',
            BackgroundColor: '#1a202c',
            cellbackgroundColor: '#4fd1c5',
            color: 'white',
            cellbgColor:'rgb(42, 67, 101)',
        }
    }
    @action.bound
    onChangeSelectedTheme(color){
        let changeTheme=color==='DARK'?ThemeStore.themeMode.light:ThemeStore.themeMode.dark;
        this.selectedTheme=changeTheme;
    }
}


const themeStore = new ThemeStore;
export default themeStore;