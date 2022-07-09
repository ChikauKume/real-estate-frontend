export default function({store, redirect}){

    if(store.$auth.loggedIn){
        if(store.$auth.user.data.user_type_id == 2){
            return redirect('/dashboard')
        }
        // else if(store.$auth.user.data.user_type_id == 1){
        //     return redirect('/admin/real-estate')
        // }
    }
    else{
        
    }
}