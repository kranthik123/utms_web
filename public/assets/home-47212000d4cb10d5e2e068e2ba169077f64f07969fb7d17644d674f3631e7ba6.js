(function(){$(window).load(function(){var i;return $("#transcript_application_course").parent().hide(),$("[for=transcript_application_course]").hide(),i=$("#transcript_application_college_id").html(),$("#transcript_application_university_id").change(function(){var t,a,r;return r=$("#transcript_application_university_id").find("option:selected").text(),t=r.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"),a=$(i).filter("optgroup[label='"+r+"']").html(),a?($("#transcript_application_college_id").html(a),$("#transcript_application_college_id").parent().show(),$("[for=transcript_application_college_id]").show(),$("#transcript_application_course").parent().show(),$("[for=transcript_application_course]").show()):($("#transcript_application_college_id").empty(),$("#transcript_application_college_id").parent().hide(),$("[for=transcript_application_college_id]").hide())})})}).call(this);