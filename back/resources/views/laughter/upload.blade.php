<form method="post" action="{{route('upload')}}" enctype="multipart/form-data">
    @csrf
    <label>面白ろい画像</label>
    <input type="file" name="image" accept="image/png, image/jpeg image/jpg">
    <button type="submit">送信</button>
</form>
@if (session('status'))
    <div>{{session('status')}}</div>
@endif
<img src="{{ asset('/ok.png') }}">
<img src="{{ asset('storage/images/ok.png') }}">
<img src="http://localhost:8000/storage/ok.png"/>
<img src="{{asset('storage/sample.jpg')}}">

