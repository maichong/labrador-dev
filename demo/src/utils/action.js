/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-11-10
 * @author Li <li@maichong.it>
 */
export function redux(title){
  console.log('----->>,action---ACTION_REDUX');
  return {
    type:'ACTION_REDUX',
    title:'title-'+title
  }
}
