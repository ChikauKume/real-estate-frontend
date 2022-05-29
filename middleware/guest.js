export default function({store, redirect}){
    // console.log('processed')
    if(store.loggedIn){
        return redirect('/admin/real-estates')
    }
}