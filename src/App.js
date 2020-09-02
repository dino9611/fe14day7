import React,{createRef} from 'react';
// import Tulisan from './components/tulisan'
import './App.css';


var data = [
  {nama:'budi',usia:5,alamat:'jl. sukahari'},
  {nama:'andi',usia:4,alamat:'jl. suka minggu'},
  {nama:'santi',usia:3,alamat:'jl. suka bulan'}
]

class App extends React.Component {
  state = {
    angka:0,
    datamurid:[],
    nama:'',
    usia:'',
    alamat:'',
    indexedit:-1,
    indexdelete:-1,
    editform:{
      editnamaref:createRef(),
      editusiaref:createRef(),
      editalamatref:createRef(),
      editnama:'',
      editusia:'',
      editalamat:''
    }
  }
  namaref = createRef()
  usiaref = createRef()
  alamatref = createRef()
  // componentWillMount(){
  //   console.log('masuk willmount')
  // }
  componentDidMount(){
    
    console.log('masuk didmount') //didmount digunakan biasanya untuk ngeload data dari backend
    setTimeout(()=>{
      this.setState({datamurid:data})
    },500)
  }
  //componentDidUpdate(){
    // if(this.state.angka > 5){
    //   this.setState({angka:-5})
    // }
    //console.log('masuk didupdate') //disarankan nggak boleh setstate setstate di didupdate
  //}

  componentWillUnmount(){
    console.log('dmd')
  }

  onclickaja = ()=>{
    var nama = this.namaref.current.value
    var usia = this.usiaref.current.value
    // var nama=this.state.nama kalau pake onchange
    // var usia=this.state.usia
    this.setState({nama,usia})
    console.log(nama,usia)    
  }

  oninputajachange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

  onTambahClick=(e)=>{
    e.preventDefault()
    var nama=this.namaref.current.value
    var usia=this.usiaref.current.value
    var alamat=this.alamatref.current.value
    var datamurid=this.state.datamurid
    datamurid.push({nama,usia,alamat:alamat})
    this.setState({datamurid})
    this.namaref.current.value=''
    this.usiaref.current.value=''
    this.alamatref.current.value=''
  }

  onDeleteHandler=(index)=>{
    this.setState({indexdelete:index})
  }

  onDeleteYesClick=()=>{
    var {datamurid,indexdelete}=this.state
    // datamurid=datamurid
    datamurid.splice(indexdelete,1)
    this.setState({datamurid,indexdelete:-1})
  }

  onEditClick=(index)=>{
    var {nama,usia,alamat}=this.state.datamurid[index]
    var edditformaja=this.state.editform
    edditformaja={...edditformaja,editnama:nama,editalamat:alamat,editusia:usia}
    //yang diatas itu untuk onchange kalo mau pake ref aja cukup indexedtinya aja yang diubah
    this.setState({indexedit:index,editform:edditformaja})
  }


  onSaveEditHandler=()=>{
    var {editnamaref,editusiaref,editalamatref,editnama}=this.state.editform
    // console.log(editnama)//klo edit nama itu pake onchange/
    var editnama=editnamaref.current.value
    var editusia=editusiaref.current.value
    var editalamat=editalamatref.current.value
    var datamurid=this.state.datamurid
    var datamuridsatua= datamurid[this.state.indexedit]
    datamuridsatua={...datamuridsatua,nama:editnama,usia:editusia,alamat:editalamat}
    datamurid.splice(this.state.indexedit,1,datamuridsatua)
    this.setState({datamurid:datamurid,indexedit:-1})
    // console.log(editnama,'nama')
    // console.log(editusia,'usia')
    // console.log(editalamat,'alamat')
  }

  onChangeHandler=(e,namaproperty)=>{
    this.setState({editform:{...this.state.editform,[namaproperty]:e.target.value}})
  }


  renderDatamurid=()=>{
    return this.state.datamurid.map((val,index)=>{
      if(index === this.state.indexdelete){
        return(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{val.nama.toUpperCase()}</td>
          <td>{val.usia + ' tahun'}</td>
          <td>{val.alamat}</td>
          <td>
            <button className='btn btn-success' onClick={this.onDeleteYesClick}>Yes</button>
            <button className='btn btn-secondary' onClick={()=>this.setState({indexdelete:-1})}>Cancel</button>
          </td>
        </tr>
        )
      }else if(index === this.state.indexedit){
        return(
        <tr key={index}>
          <td>{index+1}</td>
          <td><input ref={this.state.editform.editnamaref} value={this.state.editform.editnama} onChange={(e)=>this.onChangeHandler(e,'editnama')} defaultValue={val.nama} /></td>
          <td><input ref={this.state.editform.editusiaref}  onChange={(e)=>this.onChangeHandler(e,'editusia')} defaultValue={val.usia}/></td>
          <td><input ref={this.state.editform.editalamatref} onChange={(e)=>this.onChangeHandler(e,'editalamat')} defaultValue={val.alamat}/></td>
          <td>
            <button className='btn btn-success' onClick={this.onSaveEditHandler} >Save</button>
            <button className='btn btn-secondary' onClick={()=>this.setState({indexedit:-1})} >Cancel</button>
          </td>
        </tr>
        )
      }
      return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{val.nama.toUpperCase()}</td>
          <td>{val.usia + ' tahun'}</td>
          <td>{val.alamat}</td>
          <td>
            <button className='btn btn-primary' onClick={()=>this.onEditClick(index)}>Edit</button>
            <button className='btn btn-danger' onClick={()=>this.onDeleteHandler(index)}>Delete</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    // console.log('masuk render')
    if(this.state.datamurid.length !== 0){
      return (
        <div style={{height:'100vh'}} className=" mt-3 d-flex justify-content-center flex-column align-items-center">
          <h1>Murid Tk Sukamaju</h1>
          <div>
            <form onSubmit={this.onTambahClick}>
              <div><input type='text' name='nama'  onChange={this.oninputajachange} className='form-control' placeholder='masukkan nama bos' ref={this.namaref}/></div>
              <div><textarea cols='20' className='form-control' rows='6' placeholder='masukkan alamat bos' ref={this.alamatref}/></div>
              <div><input type='number' className='form-control' placeholder='masukkan nama usia' ref={this.usiaref}/></div>
              <button type='submit' className='btn btn-primary mt-2'>
                tambahkan
              </button>
            </form>
          </div>
           <table>
             <thead>
               <tr>
                 <th>No.</th>
                 <th>Nama</th>
                 <th>Usia</th>
                 <th>alamat</th>
                 <th>action</th>
               </tr>
             </thead>
             <tbody>
                {this.renderDatamurid()}
             </tbody>
           </table>
            
        </div>  
      );
    }else{
      return(
        <h1>loading</h1>
      )
    }
  }
}



export default App;
