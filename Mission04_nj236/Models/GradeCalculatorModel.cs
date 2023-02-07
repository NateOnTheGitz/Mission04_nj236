using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_nj236.Models
{
    public class GradeCalculatorModel
    {
        
        [Range (0, 100, ErrorMessage ="Number must be between 0 and 100")]
        public int Assignments { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Group { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Quizzes { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Midterm { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Final { get; set; }
        
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Intex { get; set; }

    }
}
