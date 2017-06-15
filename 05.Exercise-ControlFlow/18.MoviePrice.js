/**
 * Created by 1234 on 27.5.2017 г..
 */
function price([title,dayMovie]) {
    let titleMovie = title.toLowerCase();
    let day=dayMovie.toLowerCase();
    if (titleMovie == 'the godfather') {
        switch (day) {
            case 'monday':
                console.log(12);
                break;
            case 'tuesday':
                console.log(10);
                break;
            case 'wednesday':
            case 'friday':
                console.log(15);
                break;
            case 'thursday':console.log(12.50);break;
            case 'saturday':
                console.log(25);
                break;
            case 'sunday':
                console.log(30);
                break;
            default:
                console.log('error');break;
        }
    }
    else if (titleMovie == 'schindler\'s list') {
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                console.log(8.50);
                break;
            case 'saturday':
            case 'sunday':
                console.log(15);
                break;
            default:
                console.log('error');
        }
    }
else if (titleMovie == 'casablanca') {
        switch (day) {
            case 'monday':
            case 'tuesday':
            case 'wednesday':
            case 'thursday':
            case 'friday':
                console.log(8);
                break;
            case 'saturday':
            case 'sunday':
                console.log(10);
                break;
            default:
                console.log('error');
        }

}
else if (titleMovie == 'the wizard of oz') {
    switch (day) {
        case 'monday':
        case 'tuesday':
        case 'wednesday':
        case 'thursday':
        case 'friday':
            console.log(10);
            break;
        case 'saturday':
        case 'sunday':
            console.log(15);
            break;
        default:
            console.log('error');
    }

}else{
    return 'error';
}
}

