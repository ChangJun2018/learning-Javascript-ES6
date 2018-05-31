const data = [
    {
      name: '吴小红',
      age: 30,
      gender: '男',
      lookingfor: '女',
      location: '北京',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: '吴小红2',
      age: 32,
      gender: '男',
      lookingfor: '女',
      location: '上海',
      image: 'https://randomuser.me/api/portraits/men/2.jpg'
    },
    {
      name: '吴小红3',
      age: 24,
      gender: '女',
      lookingfor: '男',
      location: '北京',
      image: 'https://randomuser.me/api/portraits/women/3.jpg'
    }
  ];

    // generator生成器
  function* profilelterator(){
      yield data[0];
      yield data[1];
      yield data[2];
  }

  const profiles=profilelterator(data);

//   先手动调用一下这个方法
  nextProfile();

//   绑定事件
  document.getElementById('next').addEventListener("click",nextProfile);


  function nextProfile(){
    const currentProfile = profiles.next().value;
    // console.log(currentProfile);
    if(currentProfile !== undefined){
      document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
          <li class="list-group-item">姓名: ${currentProfile.name}</li>
          <li class="list-group-item">年龄: ${currentProfile.age}</li>
          <li class="list-group-item">位置: ${currentProfile.location}</li>
          <li class="list-group-item">诉求: ${currentProfile.gender} 寻找的目标对象是${currentProfile.lookingfor}性朋友</li>
        </ul>
      `;
      document.getElementById('imageDisplay').innerHTML = `
      <img src="${currentProfile.image}"/>
    `;
    }else{
      window.location.reload();
    }
  }