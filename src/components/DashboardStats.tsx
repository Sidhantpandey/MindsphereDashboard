import React from 'react';
import { Trophy, Flame, Calendar, Activity } from 'lucide-react';
import { CompletedExercise } from '../types';

interface DashboardStatsProps {
  totalCredits: number;
  streak: number;
  completedExercises: CompletedExercise[];
}

export function DashboardStats({ totalCredits, streak, completedExercises }: DashboardStatsProps) {
  const today = new Date().toISOString().split('T')[0];
  const completedToday = completedExercises.filter(ex => 
    ex.completedAt.split('T')[0] === today
  ).length;

  const stats = [
    {
      label: 'Total Credits',
      value: totalCredits,
      icon: Trophy,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      label: 'Current Streak',
      value: `${streak} days`,
      icon: Flame,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      label: 'Completed Today',
      value: completedToday,
      icon: Calendar,
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Total Completed',
      value: completedExercises.length,
      icon: Activity,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                {stat.label}
              </p>
              <p className="mt-2 text-3xl font-bold text-gray-900">
                {stat.value}
              </p>
            </div>
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}