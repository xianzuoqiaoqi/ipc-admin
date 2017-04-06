/*jshint node: true*/

//引入gulp及各种组件;

var gulp = require('gulp'),
    
    uglify = require('gulp-uglify'),
    
    minifyCSS = require('gulp-minify-css'),
    
    less = require('gulp-less'),
    
    imagemin = require('gulp-imagemin'),
    
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    
    imageminOptipng = require('imagemin-optipng'),
    
    browserSync = require('browser-sync').create(),
    
    eslint = require('gulp-eslint');




//设置各种输入输出文件夹的位置;

var srcScript = 'dev/**/*.js',
    
    dstScript = 'res/',
    
    srcLib = 'dev/lib/**/*.*',
    
    dstLib = 'res/lib/',
    
    srcCss = 'dev/css/*.css',
    
    dstCSS = 'res/css/',
    
    srcLess = 'dev/css/*.less',
    
    dstLess = 'res/css/',
    
    srcImage = 'dev/img/*.*',
    
    dstImage = 'res/img/',
    
    srcHtml = 'dev/tpl/*.html',
    
    dstHtml = 'res/tpl/';

    srcJson = 'dev/**/*.json',
    
    dstJson = 'res/';

//js检错。
gulp.task('lint', function() {
    return gulp.src(srcScript)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

//处理JS文件:压缩,然后换个名输出;
//命令行使用gulp script启用此任务;
gulp.task('script', function ()
{
    
    gulp.src(srcScript)
        
        .pipe(uglify(
            {mangle: false}//排除混淆关键字
        ))
        
        .pipe(gulp.dest(dstScript));
    
});


//处理CSS文件:压缩,然后换个名输出;

//命令行使用gulp css启用此任务;

gulp.task('css', function ()
{
    
    gulp.src(srcCss)
        
        .pipe(minifyCSS())
        
        .pipe(gulp.dest(dstCSS));
    
});


//LESS文件输出CSS,天生自带压缩特效;

//命令行使用gulp less启用此任务;

gulp.task('less', function ()
{
    
    gulp.src(srcLess)
        
        .pipe(less({
            
            outputStyle: 'compressed'
            
        }))
        
        .pipe(gulp.dest(dstLess));
    
});


//图片压缩任务,支持JPEG、PNG及GIF文件;

//命令行使用gulp jpgmin启用此任务;

gulp.task('imgmin', function ()
{
    
    var jpgmin = imageminJpegRecompress({
            
            accurate: true,//高精度模式
            
            quality: "high",//图像质量:low, medium, high and veryhigh;
            
            method: "smallfry",//网格优化:mpe, ssim, ms-ssim and smallfry;
            
            min: 70,//最低质量
            
            loops: 0,//循环尝试次数, 默认为6;
            
            progressive: false,//基线优化
            
            subsample: "default"//子采样:default, disable;
            
        }),
        
        pngmin = imageminOptipng({
            
            optimizationLevel: 4
            
        });
    
    gulp.src(srcImage)
        
        .pipe(imagemin({
            
            use: [jpgmin, pngmin]
            
        }))
        
        .pipe(gulp.dest(dstImage));
    
});


//把所有html页面扔进dist文件夹(不作处理);

//命令行使用gulp html启用此任务;

gulp.task('html', function ()
{
    
    gulp.src(srcHtml)
        
        .pipe(gulp.dest(dstHtml));
    
});
gulp.task('json', function ()
{
    
    gulp.src(srcJson)
        
        .pipe(gulp.dest(dstJson));
    
});
gulp.task('lib', function ()
{
    
    gulp.src(srcLib)
        
        .pipe(gulp.dest(dstLib));
    
});

//服务器任务:以dist文件夹为基础,启动服务器;

//命令行使用gulp server启用此任务;

gulp.task('server', function ()
{
    
    browserSync.init({
        
        server: "./"
        
    });
    
});


//监控改动并自动刷新任务;
//命令行使用gulp auto启动;
gulp.task('auto', function ()
{
    gulp.watch(srcScript,['script']);
    gulp.watch(srcCss,['css']);
    gulp.watch(srcLib,['lib']);
    gulp.watch(srcLess,['less']);
    gulp.watch(srcImage,['imgmin']);
    gulp.watch(srcHtml,['html']);
    gulp.watch(srcJson,['json']);
    // gulp.watch(['dev/**/*.*','index.html'], ['script', 'css', 'less', 'imgmin', 'html', 'lib', 'json', 'server', 'auto']);
    
    gulp.watch(['res/**/*.*','index.html']).on('change', browserSync.reload);
    
});

//gulp默认任务(集体走一遍,然后开监控);
gulp.task('default', ['script', 'css', 'less', 'imgmin', 'html', 'lib', 'json', 'server', 'auto']);
// gulp.task('default', ['script', 'css', 'less', 'imgmin', 'html', 'lib', 'json']);