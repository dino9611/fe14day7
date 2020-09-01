import React,{createRef} from 'react';
import Tulisan from './components/tulisan'
import './App.css';


var data = [
  {nama:'budi',usia:5,alamat:'jl. sukahari'},
  {nama:'andi',usia:4,alamat:'jl. suka minggu'},
  {nama:'santi',usia:3,alamat:'jl. suka bulan'}
]

class App extends React.Component {
  state = {
    angka:0,
    datamurid:[]
  }
  namaref = createRef()
  usiaref = createRef()
  alamatref=createRef()
  // componentWillMount(){
  //   console.log('masuk willmount')
  // }
  componentDidMount(){
    
    console.log('masuk didmount') //didmount digunakan biasanya untuk ngeload data dari backend
    setTimeout(()=>{
      this.setState({datamurid:data})
    },500)
  }
  componentDidUpdate(){
    // if(this.state.angka > 5){
    //   this.setState({angka:-5})
    // }
    //console.log('masuk didupdate') //disarankan nggak boleh setstate setstate di didupdate
  }

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

  renderDatamurid=()=>{
    return this.state.datamurid.map((val,index)=>{
      return (
        <tr key={index}>
          <td>{index+1}</td>
          <td>{val.nama}</td>
          <td>{val.usia}</td>
          <td>{val.alamat}</td>
        </tr>
      )
    })


  }

  render() {
    // console.log('masuk render')
    if(this.state.datamurid.length != 0){
      return (
        <div style={{height:'100vh'}} className=" mt-3 d-flex justify-content-center flex-column align-items-center">
          <h1>Murid Tk Sukamaju</h1>
          <div>
            <form onSubmit={this.onTambahClick}>
              <div><input type='text' className='form-control' placeholder='masukkan nama bos' ref={this.namaref}/></div>
              <div><textarea cols='20' className='form-control' rows='6' placeholder='masukkan alamat bos' ref={this.alamatref}/></div>
              <div><input type='number' className='form-control' placeholder='masukkan nama usia' ref={this.usiaref}/></div>
              <button type='submit'  className='btn btn-primary mt-2'>
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
