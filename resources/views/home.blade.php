@extends('layouts.app')

@section('content')
    <div class="container" id="app2">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>
                <div class="panel-body">

                    <p>this page uses vue-router for a routing example!</p>
                    <p>
                        <!-- use router-link component for navigation. -->
                        <!-- specify the link by passing the `to` prop. -->
                        <!-- <router-link> will be rendered as an `<a>` tag by default -->
                        <router-link to="/">Go to the first example</router-link><br/>
                        <router-link to="/bar">Go to the second example</router-link><br/>
                        <router-link to="/tasks">Go to tasks (via router)</router-link><br/>

                    </p>
                    <!-- route outlet -->
                    <!-- component matched by the route will render here -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
@endsection