module.exports=function(grunt){
    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dev/stylesheets/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/stylesheets/',
                    ext: '.min.css'
                }]
            }
        },
        imagemin:{
            options: {
                cache: false
            },

            dist: {
                files: [{
                    expand: true,
                    cwd: 'dev/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/img'
                }]
            }
        },
        concat:{


        },
        uglify:{


        },
        watch:{


        }

    });
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks('grunt-newer');


    grunt.registerTask("default",["newer:imagemin","newer:cssmin"]);
};